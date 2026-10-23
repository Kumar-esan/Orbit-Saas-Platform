"use client";

import { ContactRound, FolderKanban, LayoutDashboard, ListTodo, MessageCircle, Users } from "lucide-react";

const navigation = [
  { label: 'Overview', icon: LayoutDashboard }, { label: "My tasks", icon:ListTodo, count: '8' },
  { label: 'Projects', icon: FolderKanban }, { label: 'Inbox', icon: MessageCircle, count: '3' },
  { label: 'CRM', icon: ContactRound }, { label: "Team", icon: Users }
];
const activity = [
  { name: 'Sophie Chen', initials: 'SC', avatar: 'av-lilac', action: 'completed', subject: 'Moodboard exploration', time: '12 min ago', icon: 'check'},
  
];