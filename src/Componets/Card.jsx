import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaTwitter } from "react-icons/fa";
import useTheme from "../Contex/Theme"; 

function Card({ username }) {
  const [data, setData] = useState({});
  const { themeMode } = useTheme(); 

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [username]); 

  const joiningDate = data?.created_at
    ? new Date(data.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  return (
    <div
      className={`flex flex-col items-center h-auto w-full justify-center pt-2 -11 p-6 lg:pb-20 ${
        themeMode === "dark" ? "bg-[#141d2f] text-white" : "bg-[#f6f8ff] text-gray-800"
      }`}
    >
      <div
        className={`flex flex-col w-96 md:w-[50%] rounded-lg p-5 ${
          themeMode === "dark" ? "bg-[#1e2a47]" : "bg-white"
        }`}
      >
        <div className="flex flex-row justify-start h-auto">
          <img
            className="h-32 w-32 rounded-2xl"
            src={data.avatar_url}
            alt="Profile Pic"
          />
          <div className="flex flex-col lg:flex-row ml-3 w-full lg:items-center text-left">
            <div className="md:pl-9">
              <h2 className="font-bold text-base lg:mb-3">{data.name}</h2>
              <a
                href="#"
                className="text-blue-900 dark:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.login}
              </a>
            </div>

              <p className="text-gray-600 mt-3 dark:text-gray-500 text-[16px]  w-full md:pl-9 lg:text-right">
                  Joined <br/>{joiningDate}
              </p>

          </div>
        </div>

        <p className="text-left mt-5 lg:pl-44 text-[#141D2F] dark:text-gray-500">
          {data.bio}
        </p>

        <div className="lg:pl-44">
          <div
            className={`flex items-center w-full mt-5 p-4 rounded-lg ${
              themeMode === "dark" ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
            } justify-evenly`}
          >
            <div>
              <p className="text-gray-500 dark:text-gray-500 mb-1">Repos</p>
              <p className="font-bold">{data.public_repos}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-500 mb-1">Followers</p>
              <p className="font-bold">{data.followers}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-500 mb-1">Following</p>
              <p className="font-bold">{data.following}</p>
            </div>
          </div>
        </div>

        <div className="lg:pl-44">
          <div className="flex flex-wrap w-full mt-5 lg:flex-row">
            {/* Location */}
            <div className="flex mt-2 w-full md:w-1/2">
              <FaLocationDot />
              <a
                className="ml-3 text-gray-500 dark:text-gray-500"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data?.location ? data.location : "N/A"}
              </a>
            </div>

            {/* Email */}
            <div className="flex mt-2 w-full md:w-1/2">
              <MdEmail />
              <a
                className="ml-3 text-gray-500 dark:text-gray-500"
                href={data?.email ? `mailto:${data.email}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data?.email ? data.email : "N/A"}
              </a>
            </div>

            {/* Twitter */}
            <div className="flex mt-2 w-full md:w-1/2">
              <FaTwitter />
              <a
                className="ml-3 text-gray-500 dark:text-gray-500"
                href={
                  data?.twitter_username
                    ? `https://twitter.com/${data.twitter_username}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {data?.twitter_username ? data.twitter_username : "N/A"}
              </a>
            </div>

            {/* GitHub */}
            <div className="flex mt-2 w-full md:w-1/2">
              <FaGithub />
              <a
                className="ml-3 text-gray-500 dark:text-gray-500"
                href={data?.html_url ? data.html_url : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data?.html_url ? "GitHub Profile" : "N/A"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
