import React from 'react';
import { Tabs } from 'expo-router';

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Principal' }} />
            <Tabs.Screen name="matches" options={{ title: 'Matches' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
        </Tabs>
    );
};

export default Layout;