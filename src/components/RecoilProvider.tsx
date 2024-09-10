"use client";

import { RecoilRoot } from "recoil";
import React from "react";

const RecoilProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
