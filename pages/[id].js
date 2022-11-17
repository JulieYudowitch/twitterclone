import Head from "next/head";
import React, { useContext } from "react";
import Modal from "../components/Modal";
import Sidebar from '../components/Sidebar'
import SinglePost from "../components/SinglePost";
import Trending from "../components/Trending";
import { AppContext } from "../context/AppContext";

export default function PostPage() {
  const [appContext] = useContext(AppContext)
  return (
    <div>
      <Head>
        <title>Tweet reply</title>
        <meta name="description" content="Reply to tweet"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative max-w-[1400px] mx-auto">
        <Sidebar />
        <div className="flex gap-6">
          <SinglePost />
          <Trending />
          {appContext?.isModalOpen && <Modal />}
        </div>
      </main>
    </div>
  );
}
