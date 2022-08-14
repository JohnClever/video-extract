import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.videoClip.deleteMany()
  await prisma.video.deleteMany()

  await prisma.video.create({
    data: {
      progress: 0,
      failed: false,
      uuid: "ba79de25-c99a-4863-973c-e831715a35c7",
      originUrl: "https://www.youtube.com/watch?v=OZJ8cc64mbk"
    }
  })
  await prisma.video.create({
    data: {
      progress: 0,
      failed: false,
      uuid: "9d24e7de-f1ef-4fdb-a93d-5dc3785233ef",
      originUrl: "https://www.youtube.com/watch?v=9VU2lKApbVo"
    }
  })
}

seed()
 .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });
