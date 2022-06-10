import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firebase-config";
import { getAllFeeds } from "../utils/fetchData";
import Spinner from "./Spinner";
import { SimpleGrid } from "@chakra-ui/react";
import VideoPin from "./VideoPin";
import NotFound from "./NotFound";

const Feed = () => {
  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);

  const firestoreDb = getFirestore(firebaseApp);

  useEffect(() => {
    setLoading(true);
    getAllFeeds(firestoreDb).then((data) => {
      setFeeds(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />;
  if (!feeds?.length > 0) return <NotFound />;

  return (
    <SimpleGrid
      minChildWidth='300px'
      spacing='15px'
      width='full'
      autoColumns={"max-content"}
      overflowX={"hidden"}
    >
      {feeds &&
        feeds.map((data) => (
          <VideoPin key={data.id} maxWidth={420} height='80px' data={data} />
        ))}
    </SimpleGrid>
  );
};

export default Feed;
