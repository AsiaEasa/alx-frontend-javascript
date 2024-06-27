import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const RoomSizes = [19, 20, 34];
  return RoomSizes.map(size => new ClassRoom(size));
}
