"use client";

import { ContactRound, FolderKanban, LayoutDashboard, ListTodo, MessageCircle, Users } from "lucide-react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const navigation = [
  { label: 'Overview', icon: LayoutDashboard }, { label: "My tasks", icon:ListTodo, count: '8' },
  { label: 'Projects', icon: FolderKanban }, { label: 'Inbox', icon: MessageCircle, count: '3' },
  { label: 'CRM', icon: ContactRound }, { label: "Team", icon: Users }
];
const activity = [
  { name: 'Sophie Chen', initials: 'SC', avatar: 'av-lilac', action: 'completed', subject: 'Moodboard exploration', time: '12 min ago', icon: 'check' },
  { name: 'James Miller', initials: 'JM', avatar: 'av-peach', action: 'commented on', subject: 'Homepage wireframes', time: '38 min ago', icon: 'comment'},
  { name: 'Amira Rahman', initials: 'AR', avatar: 'av-mint', action: 'uploaded a file to', subject: 'Mobile app v2', time: '1hr ago', icon: 'file'}
];

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch<>();
}