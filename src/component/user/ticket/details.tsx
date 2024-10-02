"use client";

import { colorTags, fileColor } from "@/types/constants";
import { useState, useEffect } from "react";

export default function TicketDetails({ name, subject, description, files, recentUpdate, tags }: any) {
  const [timing, setTiming] = useState('');
  var sizes: string[] = [];
  useEffect(() => {
    function convertTime(recentUpdate: string) {
      let date = new Date(recentUpdate);
      let day = date.getDate();
      let month = date.toLocaleString('default', { month: 'long' });
      let year = date.getFullYear();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? Number('0' + minutes) : minutes;
      let strTime = hours + ':' + minutes + ' ' + ampm;
      let strDate = `${day}th of ${month} ${year}`;
      setTiming(strDate + ' at ' + strTime);
    }
    convertTime(recentUpdate);
    
    function convertSize(size: number) {
      let units = ['B', 'KB', 'MB', 'GB', 'TB'];
      let unit = 0;
      while (size >= 1024 && unit < units.length - 1) {
        size /= 1024;
        unit++;
      }
      return size.toFixed(2) + ' ' + units[unit]; // Ensure toFixed is applied on a number
    }
    files?.map((file: Array<any>) => {
      let fileSize = file[2];
      if (typeof fileSize === 'number') {
        sizes.push(convertSize(fileSize));
      }
    });
  }, [recentUpdate]); 
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{subject}</h2>
        <div className="flex space-x-2 mt-2">
          {tags?.map((tag: string, index: number) => (
            <span key={index} className={`bg-${colorTags[tag]}-100 text-${colorTags[tag]}-800 text-xs font-semibold px-2 py-1 rounded-lg`}>{tag}</span>
          ))}
        </div>
      </div>

      <hr className="bg-gray-200 h-0.5 my-4 w-full" />

      <div>
        <p className="text-sm text-gray-800">
          <span className="font-semibold">{name}</span> | <span className="text-gray-500">{timing}</span>
        </p>
        <p className="mt-4 text-sm text-gray-600">{description}</p>
      </div>

      <div className="flex items-center space-x-4">
        {files?.map((file: Array<any>, index: number) => (
          <div key={index} className={`flex items-center space-x-2 bg-red-50 p-2 rounded-lg border border-${fileColor[file[0]]}-100`}>
            <img src={`/${file[0]}.svg`} alt={file[0]} className="w-6 h-6" />
            <p className="text-xs font-medium text-red-800">{file[1]} ({sizes[index]})</p>
          </div>
        ))}
      </div>

      <div>
        <p className="font-semibold text-sm text-gray-700 mb-2">Reply to:</p>
        <div className="flex items-start space-x-2 mb-4">
          <div className="bg-gray-100 w-10 h-10 rounded-full"></div>
          <div className="w-full bg-gray-50 border border-gray-300 rounded-lg">
            <div className="p-3 flex justify-between">
              <textarea className="w-full text-sm p-2 text-black bg-transparent border border-transparent focus:outline-none focus:border-transparent" rows={2} placeholder="Hi Dean, Thanks for contacting us..."></textarea>
              <button className="bg-blue-600 text-white px-4 py-2 h-12 rounded-lg">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
