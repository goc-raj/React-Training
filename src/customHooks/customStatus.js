import { useOnlineStatus } from './useOnlineStatusBar';

function StatusBar() {
  const isOnline = useOnlineStatus(); // This is call Extracting of Custom Hook.
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

export default function CustomStatusBar() {
  return (
    <>
      <StatusBar />
    </>
  );
}
