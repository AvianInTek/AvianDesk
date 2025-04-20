"use client";

import { colorTags, fileColor } from "@/types/color";
import { useState, useEffect } from "react";
import ImagePopup from "./imagePop";

function TicketDetailsAvailable({ fetchComment, data, userInfo }: any) {
  const [timing, setTiming] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [comment, setComment] = useState('');
  const [isCommenting, setIsCommenting] = useState(false);

  const handleOpen = () => {
    setShowPopup(true);
  };
  const handleClose = () => setShowPopup(false);
  var [sizes, setSizes] = useState([]);
  
  useEffect(() => {
    function convertTime(createdAt: string) {
      let date = new Date(createdAt);
      let day = date.getDate();
      let month = date.toLocaleString('default', { month: 'long' });
      let year = date.getFullYear();
      let hours = date.getHours();
      var minutes: any = date.getMinutes();
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? String('0' + minutes) : minutes;
      let strTime = hours + ':' + minutes + ' ' + ampm;
      let strDate = `${day}th of ${month} ${year}`;
      setTiming(strDate + ' at ' + strTime);
    }
    convertTime(data.createdAt);
    
    function convertSize(size: number) {
      let units = ['B', 'KB', 'MB', 'GB', 'TB'];
      let unit = 0;
      while (size >= 1024 && unit < units.length - 1) {
        size /= 1024;
        unit++;
      }
      return size.toFixed(2) + ' ' + units[unit];
    }
    const newSizes = data.files?.map((file: Array<any>) => convertSize(file[2])) || [];
    setSizes(newSizes);
  }, [data.createdAt, data.files]);

  async function sendComment() {
    console.log(data)
    if (data.status === 'closed') return;
    if (!comment.trim()) return;
    
    setIsCommenting(true);
    try {
      const res = await fetch("/api/dashboard/comment", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              comment: comment,
              ticket: data._id,
          }),
      });
      const datax = await res.json();
      if (datax.success) {
          setComment('');
      } else {
          console.error("details failed:", data.message);
      }
    } catch (error) {
        console.error("Error during details:", error);
    } finally {
      setIsCommenting(false);
    }
  }

  
  async function closeTicket() {
    try {
      const res = await fetch("/api/admin-dashboard/tickets", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              ticketId: data._id,
          }),
      });
      const datax = await res.json();
      if (datax.success && typeof window !== "undefined") {
          window.location.href = '/tickets';
      } else {
          console.error("details failed:", data.message);
      }
    } catch (error) {
        console.error("Error during details:", error);
    } finally {
      setIsCommenting(false);
    }
  }

  
  const [admin, setAdmin] = useState(false);
  async function handleAdmin() {
      try {
          const res = await fetch('/api/auth/verify', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          });
          const data = await res.json();
          if (data.success) {
              if (data.admin) {
                  setAdmin(true);
              } else {
                  setAdmin(false);
              }
          } else {
              console.error('Verify failed:', data.message);
          }
      } catch (error) {
          console.error('Error verify out:', error);
      }
  }

  useEffect(() => {
      handleAdmin();
  }, []);

  return (
    <>
      {showPopup && <ImagePopup imageUrl={data.attachment} onClose={handleClose} />}
      
      <div className="space-y-4 p-0 md:p-5">
        <div>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <button onClick={() => {if (typeof window !== "undefined") window.location.href = '/tickets'}} className="focus:outline-none p-1 mt-1">
                <img src="/icons/back.svg" alt="Back" className="w-8 h-8" />
              </button>
              <h2 className="text-xl font-semibold text-gray-800">
              {data.subject}
              </h2>
            </div>
            {admin && (<button onClick={closeTicket} className="text-md text-red-600 px-3 py-1 rounded-lg hover:bg-red-600 hover:text-white border-2 border-red-600 transition-colors">
              Solved
            </button>)}
          </div>
          <div className="flex space-x-2 mt-2">
            {data.tags?.map((tag: string, index: number) => {
              return colorTags(tag, index)
            })}
          </div>
        </div>

        <hr className="bg-gray-200 h-0.5 my-2 w-full" />

        <div>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">{userInfo?.name ? userInfo.name : 'Mr. Customer'}</span> | <span className="text-gray-500">{timing || 'Someday'}</span>
          </p>
          <div className="mt-4 text-sm text-gray-600 max-h-32 overflow-y-auto pr-2">
            {data.description}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {data.files?.map((file: Array<any>, index: number) => (
            <div key={index} onClick={handleOpen} className={`flex items-center space-x-2 bg-red-50 p-2 rounded-lg border border-${fileColor[file[0]]}-100`}>
              <span className="text-sm bg-red-200 text-red-700 px-2 py-2 rounded-lg uppercase font-semibold">{file[0]}</span>
              <p className="text-xs font-medium text-red-800">{file[1]} ({sizes[index]})</p>
            </div>
          ))}
        </div>

        <div>
          <p className="font-semibold text-sm text-gray-700 mb-2">Reply to:</p>
          <div className="flex items-start space-x-2 mb-4">
            <div className="w-10 h-10 px-4 rounded-full border-4 border-white bg-blue-400 flex items-center justify-center text-white text-lg font-semibold">
              {userInfo?.name ? userInfo.name?.charAt(0).toUpperCase() : '!'}
            </div>
            <div className="w-full bg-gray-50 border border-gray-300 rounded-lg">
              <div className="p-2 flex justify-between">
                <textarea onChange={e => setComment(e.target.value)} value={comment} rows={2} placeholder="Drop your comments here..."
                  className="w-full text-xs md:text-sm text-black bg-transparent border border-transparent focus:outline-none focus:border-transparent resize-none" 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendComment();
                    }
                  }}></textarea>
                <button 
                  className={`bg-blue-600 text-white px-4 py-2 h-full rounded-lg hover:bg-blue-800 transition-colors disabled:bg-blue-400 ${data.status === 'closed' ? 'cursor-not-allowed': ''}`}
                  onClick={sendComment} disabled={!comment.trim() || isCommenting || data.status === 'closed'}>
                  {isCommenting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Comments ({fetchComment.length})</h3>
          <div className="flex flex-col space-y-4 max-h-32 overflow-y-auto pr-2">
            {fetchComment.length > 0 ? (
              fetchComment.map((comment: any, index: number) => (
              <div key={index} className="rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 px-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold mr-3 overflow-hidden">
                    {comment?.user?.name ? comment.user.name?.charAt(0).toUpperCase() : '!'}
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between w-full items-center">
                        <p className="text-sm font-semibold text-gray-800">
                        {comment?.user?.name ? comment.user.name : 'Mr. Customer'}
                        </p>
                        <p className="text-xs text-gray-500 pl-2">
                        {comment.createdAt}
                        </p>
                      </div>
                    <p className="text-sm text-gray-700 mt-1">{comment.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
              ))
            ) : (
              <div className="text-center py-8">
              <p className="text-sm text-gray-500">No comments yet</p>
              <p className="text-xs text-gray-400 mt-1">Be the first to comment</p>
              </div>
            )}
            </div>
        </div>
      </div>
    </>
  );
}

function TicketDetailsError({error}: any) {
  return (
    <p className="text-gray-600">{error}</p>
  )
}

export default function TicketDetails({ data, fetchComment, ticketId, userInfo }: any) {
  var component, error, info;
  data?.map((ticket: any) => {if (ticket._id === ticketId) {info = ticket}});
  if (info) {
    component = <TicketDetailsAvailable data={info} userInfo={userInfo} fetchComment={fetchComment} />;
  } else if (error) {
    component = <TicketDetailsError error={error}/>;
  } else {
    component = <TicketDetailsError error="Select a ticket to view details."/>;
  }
  return component;
}
