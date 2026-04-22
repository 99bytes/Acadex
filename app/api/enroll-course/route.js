import { db } from "../../../config/db.js";
import { courseTable, enrollCourseTable } from "../../../config/schema.js";
import { currentUser } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { courseId } = await req.json();
  const user = await currentUser();

  // Check if already enrolled
  const enrolledCourses = await db.select().from(enrollCourseTable)
    .where(
      and(
        eq(enrollCourseTable.userEmail, user?.primaryEmailAddress?.emailAddress),
        eq(enrollCourseTable.cid, courseId)
      )
    );

  if (enrolledCourses.length === 0) {
    const result = await db.insert(enrollCourseTable)
      .values({
        cid: courseId,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      })
      .returning();

    return NextResponse.json(result);
  }

  return NextResponse.json({ resp: 'Already Enrolled' });
}


export async function GET(req){

    const user=await currentUser();

    const {searchParams}=new URL(req.url);
    const courseId=searchParams?.get('courseId')

    if(courseId){
      const result=await db.select().from(courseTable)
      .innerJoin(enrollCourseTable,eq(courseTable.cid,enrollCourseTable.cid))
      .where(and(eq(enrollCourseTable.userEmail,user?.primaryEmailAddress.emailAddress),
          eq(enrollCourseTable.cid,courseId)))
      

      return NextResponse.json(result[0])
    }
    else{
  
      const result=await db.select().from(courseTable)
      .innerJoin(enrollCourseTable,eq(courseTable.cid,enrollCourseTable.cid))
      .where(eq(enrollCourseTable.userEmail,user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(enrollCourseTable.id));

    return NextResponse.json(result)
    }
}


export async function PUT(req) {
  const {completedChapters,courseId}=await req.json();
  const user=await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  // Check if enrolled first
  const existing = await db.select().from(enrollCourseTable)
    .where(and(eq(enrollCourseTable.cid, courseId), eq(enrollCourseTable.userEmail, userEmail)));

  if (existing.length === 0) {
    // Auto-enroll the creator if they haven't enrolled yet
    const result = await db.insert(enrollCourseTable).values({
      cid: courseId,
      userEmail: userEmail,
      completedChapters: completedChapters
    }).returning(enrollCourseTable);
    return NextResponse.json(result);
  } else {
    // Update existing
    const result = await db.update(enrollCourseTable).set({
      completedChapters: completedChapters
    }).where(and(eq(enrollCourseTable.cid, courseId), eq(enrollCourseTable.userEmail, userEmail)))
    .returning(enrollCourseTable);
    return NextResponse.json(result);
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams?.get("courseId");
    const user = await currentUser();

    if (!user || !courseId) {
      return NextResponse.json({ error: "Unauthorized or missing parameters" }, { status: 400 });
    }

    const result = await db.delete(enrollCourseTable)
      .where(and(
        eq(enrollCourseTable.cid, courseId), 
        eq(enrollCourseTable.userEmail, user.primaryEmailAddress?.emailAddress)
      ))
      .returning();

    return NextResponse.json({ success: true, unenrolled: result });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}