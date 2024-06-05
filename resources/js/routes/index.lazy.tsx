import { Dashboard } from "@/pages/dashboard";
import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return <>hellos</>;
}
