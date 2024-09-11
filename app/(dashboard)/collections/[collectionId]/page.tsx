"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/customUi/Loader";
import CollectionForm from "@/components/collections/CollectionForm";

const CollectionDetials = ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const [loading, setLoading] = useState(true);
  const [collectionDetails, setCollectionDetails] =
    useState<CollectionType | null>(null);

  const getCollectionDetails = async () => {
    try {
      const res = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET",
      });
      const data = await res.json();
      setCollectionDetails(data);
      setLoading(false);
    } catch (err) {
      console.log("[Collection_Get]", err);
    }
  };

  useEffect(() => {
    getCollectionDetails();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <CollectionForm initialData={collectionDetails} />
    </div>
  );
};

export default CollectionDetials;
