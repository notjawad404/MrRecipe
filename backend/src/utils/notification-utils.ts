import Notification from "../models/notfication";


export const sendNotification = async (
  studentId: string,
  content: string,
  sentBy:  "Medology" | "Course" | "Event"
) => {
  const notification = await Notification.create({
    studentId,
    content,
    sentBy,
  });
  return notification;
};
