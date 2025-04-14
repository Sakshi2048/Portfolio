import React from "react";
import { Button } from "../Components/Button";
import { Card, CardContent } from "../Components/Card";

const Profile = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <Card className="w-full h-screen flex items-center justify-center">
        <CardContent className="w-full h-full flex flex-col md:flex-row items-center justify-between p-8 bg-gray-950 text-white px-28 rounded-none shadow-none">
          {/* Left content (text) */}
          <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-4xl font-bold">
              Hello<span className="inline-block animate-wave">👋</span>
            </h2>
            <h1 className="text-5xl font-bold">
              I’m Sakshi Marbhal <br />
              <span className="text-blue-600">a Web Developer</span>
            </h1>
            <p className="text-gray-300">
              Hi, I am a passionate web developer with experience in building
              interactive and responsive web applications. I love working with
              React and Tailwind CSS to create modern and user-friendly designs.
              Apart from coding, I enjoy contributing to open-source projects.
            </p>
            <div className="flex gap-4 mt-4">
              <Button variant="primary">Book a Call</Button>
              <Button variant="outline" className="bg-white text-black">
                Download CV
              </Button>
            </div>
          </div>

          {/* Right content (image) */}
          <div className="mt-8 md:mt-0">
            <img
              src="https://i.pinimg.com/originals/32/f8/fe/32f8fe8fcaa23a23e441b1302e94bd25.jpg"
              alt="Profile"
              className="w-72 h-auto rounded-4xl pr-4 "
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
