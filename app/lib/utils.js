import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const BASE_URL = "https://electro-api.sifztech.com/api";
export const PAGE_SIZE = 8;
export const PRODUCT_PAGE_SIZE = 10;
export const BASE_URL_IMAGE = "https://electro-api.sifztech.com";

export const permissions = [
  {
    id: 1,
    name: "dashboard",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 2,
    name: "product_add",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 3,
    name: "product_update",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 4,
    name: "product_delete",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 5,
    name: "product_list",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 6,
    name: "category_add",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 7,
    name: "category_update",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 8,
    name: "category_delete",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 9,
    name: "category_list",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 10,
    name: "subcategory_add",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 11,
    name: "subcategory_update",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 12,
    name: "subcategory_delete",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 13,
    name: "subcategory_list",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 14,
    name: "add_attribute",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 15,
    name: "add_attribute_value",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 16,
    name: "attribute_list",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 17,
    name: "brand_list",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 18,
    name: "brand_add",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 19,
    name: "brand_update",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 20,
    name: "brand_delete",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 21,
    name: "social_media_assets",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 22,
    name: "dealer_edit",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 23,
    name: "dealer_delete",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 24,
    name: "dealer_block",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 25,
    name: "dealer_list",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 26,
    name: "create_event",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 27,
    name: "calendar_view",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 28,
    name: "click_and_collect",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 29,
    name: "stock",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 30,
    name: "upload_stock",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 31,
    name: "edit_stock",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 32,
    name: "find_dealer",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 33,
    name: "warranty",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 34,
    name: "create_warranty",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 35,
    name: "users_and_permissions",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 36,
    name: "all_users",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 37,
    name: "block_user",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 38,
    name: "roles_and_permissions",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 39,
    name: "admin",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 40,
    name: "edit_user",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 41,
    name: "assign_role",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 42,
    name: "block_list",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
  {
    id: 43,
    name: "settings",
    guard_name: "sanctum",
    created_at: "2024-06-12T15:19:03.000000Z",
    updated_at: "2024-06-12T15:19:03.000000Z",
  },
];
