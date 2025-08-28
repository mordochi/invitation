"use client";
import dynamic from "next/dynamic";
import LoadingCard from "../LoadingCard";

const InvitationCard = dynamic(() => import("./InvitationCard"), {
  loading: () => <LoadingCard />,
  ssr: false,
});

export default InvitationCard;
