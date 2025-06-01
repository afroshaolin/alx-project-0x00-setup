import React from "react";
import Card from "./components/Card"; //Path adjusted to match your project structure
//import Pill from "../components/Pill";
import Button from "./components/Button"; //Path adjusted to match your project structure

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
    <Card />

    <Button
        title="small rounded-sm"
        styles="px-2 py-1 text-sm rounded-sm text-black bg-white mx-2"
      />
      <Button
        title="small rounded-md"
        styles="px-2 py-1 text-sm rounded-md text-black bg-white mx-2"
      />
      <Button
        title="small rounded-lg"
        styles="px-2 py-1 text-sm rounded-lg text-black bg-white mx-2"
      />
      <Button
        title="small rounded-full"
        styles="px-2 py-1 text-sm rounded-full text-black bg-white mx-2"
      />
      <Button
        title="medium rounded-sm"
        styles="px-4 py-2 text-base rounded-sm text-black bg-white mx-2"
      />
      <Button
        title="medium rounded-md"
        styles="px-4 py-2 text-base rounded-md text-black bg-white mx-2"
      />
      <Button
        title="medium rounded-lg"
        styles="px-4 py-2 text-base rounded-lg text-black bg-white mx-2"
      />
      <Button
        title="medium rounded-full"
        styles="px-4 py-2 text-base rounded-full text-black bg-white mx-2"
      />

      <Button
        title="Large rounded-sm"
        styles="px-6 py-3 text-lg rounded-sm text-black bg-white mx-2"
      />
      <Button
        title="Large rounded-md"
        styles="px-6 py-3 text-lg rounded-md text-black bg-white mx-2"
      />
      <Button
        title="Large rounded-lg"
        styles="px-6 py-3 text-lg rounded-lg text-black bg-white mx-2"
      />
      <Button
        title="Large rounded-full"
        styles="px-6 py-3 text-lg rounded-full text-black bg-white mx-2"
      />
    </div>
  )
}
export default Landing