import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/Category";
import Create from "../components/Create";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import UserProfile from "../components/UserProfile";
import VideoPin from "../components/VideoPin";
import VideoPinDetail from "../components/VideoPinDetail";
import { categories } from "../data";

const Home = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar
        user={user}
        setsearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      <Flex width={"100vw"}>
        <Flex
          direction={"column"}
          justifyContent='start'
          alignItems={"center"}
          width='5%'
        >
          {categories &&
            categories.map((data) => <Category key={data.id} data={data} />)}
        </Flex>

        <Flex
          width={"95%"}
          px={4}
          justifyContent='center'
          alignItems={"center"}
        >
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/category/:categoryId' element={<Feed />} />
            <Route path='/create' element={<Create />} />
            <Route path='/videoDetail/:videoId' element={<VideoPin />} />
            <Route
              path='/search'
              element={<Search searchTerm={searchTerm} />}
            />
            <Route path='/userDetail/:userId' element={<UserProfile />} />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
