"use client";

import {
  getAllAdminUsers,
  getAllBlockedUsers,
  getAllUsers,
} from "@/app/_services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useUsers(page) {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getAllUsers(page),
  });

  return { data, isLoading, error, isError, total_num: data?.data?.total };
}
export function useAdminUsers() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["admin-users"],
    queryFn: () => getAllAdminUsers(),
  });

  return { data, isLoading, error, isError, total_num: data?.data?.total };
}

export function useBlockedUsers() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["blockedUsers"],
    queryFn: () => getAllBlockedUsers(),
  });

  return { data, isLoading, error, isError, total_num: data?.data?.total };
}