import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState, useMemo } from 'react';
import type { User } from '../../services/api';

interface MapViewProps {
  users?: User[];
}

export default function MapView({ users = [] }: MapViewProps) {
  const defaultCenter = { lat: 52.2297, lng: 21.0122 }; // Warszawa

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const usersWithPosition = useMemo(() => {
    return users.map((user) => {
      if (user.position) return user;

      return {
        ...user,
        position: {
          lat: defaultCenter.lat + (Math.random() - 0.5) * 0.08,
          lng: defaultCenter.lng + (Math.random() - 0.5) * 0.12,
        },
      };
    });
  }, [users]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Map
          defaultCenter={defaultCenter}
          defaultZoom={13}
          style={{ width: '100%', height: '100%' }}
          gestureHandling="greedy"
          mapId="your-map-id"
        >
          {/* Markery użytkowników */}
          {usersWithPosition.map((user) => (
            <AdvancedMarker
              key={user.id}
              position={user.position!}
              onClick={() => setSelectedUser(user)}
            >
              <Pin
                background="#EA4335"
                glyphColor="#fff"
                borderColor="#fff"
                scale={1.2}
              />
            </AdvancedMarker>
          ))}

          {/* InfoWindow */}
          {selectedUser && selectedUser.position && (
            <InfoWindow
              position={selectedUser.position}
              onCloseClick={() => setSelectedUser(null)}
            >
              <div style={{ padding: '12px', minWidth: '240px' }}>
                <h3 style={{ margin: '0 0 8px 0' }}>
                  {selectedUser.name} {selectedUser.surname && ` ${selectedUser.surname}`}, {selectedUser.age}
                </h3>

                {selectedUser.caption && (
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', lineHeight: '1.4' }}>
                    {selectedUser.caption}
                  </p>
                )}

                <button
                  onClick={() => {
                    alert(`Polubiłeś ${selectedUser.name}! ❤️`);
                    setSelectedUser(null);
                  }}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#34a853',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: 600,
                  }}
                >
                  Polub ❤️
                </button>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}