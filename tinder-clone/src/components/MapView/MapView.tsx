import { useState, useEffect, useMemo } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { api, type User } from "../../services/api";

export default function MapView() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    api.fetchUsers().then(setUsers);
  }, []);

  const usersWithPosition = useMemo(() => {
    return users.filter((user) => user.position);
  }, [users]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Map
          defaultCenter={{ lat: 52.2297, lng: 21.0122 }}
          defaultZoom={12.8}
          style={{ width: "100%", height: "100%" }}
          gestureHandling="greedy"
          mapId="DEMO_MAP_ID" // otherwise error
          mapTypeControl={true}
          mapTypeControlOptions={{
            position: 3,
            mapTypeIds: ["roadmap", "satellite"],
          }}
          zoomControl={false}
          fullscreenControl={false}
          streetViewControl={false}
          onClick={() => setSelectedUser(null)}
        >
          {usersWithPosition.map((user) => (
            <AdvancedMarker
              key={user.id}
              position={user.position!}
              onClick={() => setSelectedUser(user)}
            >
              <Pin
                background="#EA4335"
                glyphColor="#ffffff"
                borderColor="#ffffff"
                scale={1.25}
              />
            </AdvancedMarker>
          ))}

          {selectedUser && selectedUser.position && (
            <InfoWindow
              position={selectedUser.position}
              onCloseClick={() => setSelectedUser(null)}
              maxWidth={280}
            >
              <div
                style={{ padding: "8px", fontFamily: "system-ui, sans-serif" }}
              >
                <h3 style={{ margin: "0 0 4px 0", fontSize: "17px" }}>
                  {selectedUser.name} {selectedUser.surname}
                  <span
                    style={{
                      fontWeight: 400,
                      color: "#666",
                      marginLeft: "8px",
                    }}
                  >
                    {selectedUser.age} lat
                  </span>
                </h3>
                {selectedUser.caption && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: "#333",
                    }}
                  >
                    {selectedUser.caption}
                  </p>
                )}
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
