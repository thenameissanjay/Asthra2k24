import { db } from "@/app/FirebaseConfig";
import { doc, getDoc, DocumentSnapshot } from "firebase/firestore";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface SponsorData {
  titleSponsorImageUrl: string;
  coPresentedImageUrl: string;
}

export function Sponsor() {
  const [sponsorData, setSponsorData] = useState<SponsorData | null>(null);

  useEffect(() => {
    const fetchSponsorData = async () => {
      try {
        const sponsorDoc = await getDoc(doc(db, "sponsor", "9G39gWPf23i1lq7CMI9V"));
        if (sponsorDoc.exists()) {
          // This as syntax is safe because we've defined SponsorData
          setSponsorData(sponsorDoc.data() as SponsorData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchSponsorData();
  }, []); // Empty dependency array to fetch data only once

  return (
    <main>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center" style={{marginTop:"50px"}}>
          Our Sponsors
        </div>
      </motion.div>

      {sponsorData && (
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="font-extralight text-base md:text-4xl text-2xl dark:text-neutral-200 py-4 mt-100" style={{ marginTop: "10px" }}>
            Title Sponsor
          </div>
          <img src={sponsorData.titleSponsorImageUrl} alt="Title Sponsor" className="max-w-lg md:h-60 h-20 rounded-lg shadow-2xl" />
        </motion.div>
      )}

      {sponsorData && (
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Co-Sponsors
          </div>
          <div className="flex relative w-full">
  {sponsorData.coPresentedImageUrl && (
    <div className="md:w-full ">
    <div className="carousel-item relative w-full">
    <img
      src={sponsorData.coPresentedImageUrl}
      alt="Co-Presented "
      className="w-full"
    />
    </div>    </div>

  )}
</div>
        </motion.div>
      )}
    </main>
  );
}
