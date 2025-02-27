import React from 'react';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="pages/index" options={{ title: 'Principal' }} />
      <Tabs.Screen name="pages/matches" options={{ title: 'Matches' }} />
      <Tabs.Screen name="pages/profile" options={{ title: 'Profil' }} />
      <Tabs.Screen name="+not-found" options={{ href: null }} />
      <Tabs.Screen name="store" options={{ href: null }} />
      <Tabs.Screen name="queryClient" options={{ href: null }} />
    </Tabs>
  );
};

export default Layout;