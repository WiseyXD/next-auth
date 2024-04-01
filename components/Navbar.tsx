"use client";
import React from "react";
import { Separator } from "./ui/separator";

export default function Navbar() {
    const isAuthorized = false;
    return (
        <>
            <div className="px-2 py-3">
                <div className="flex justify-between">
                    <h1>scoe.mask</h1>
                    {isAuthorized && (
                        <div className="flex items-center gap-3 ">
                            <h3>User Status</h3>
                            <h3>User Pic</h3>
                            <h3>username</h3>

                            <h3>Logout</h3>
                        </div>
                    )}
                </div>
            </div>
            <Separator />
        </>
    );
}
