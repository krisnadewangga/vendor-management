import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [
  // {
  //   id: "dashboard",
  //   title: "Dashboard",
  //   type: "dropdown",
  //   icon: <Icon.Home size={16} />,
  //   children: [
  //     {
  //       id: "analyticsDash",
  //       title: "Analytics",
  //       type: "item",
  //       icon: <Icon.Circle size={10} />,
  //       navLink: "/",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "eCommerceDash",
  //       title: "eCommerce",
  //       type: "item",
  //       icon: <Icon.Circle size={10} />,
  //       navLink: "/ecommerce-dashboard",
  //       permissions: ["admin"]
  //     }
  //   ]
  // },
  {
    id: "apg",
    title: "APG",
    type: "dropdown",
    icon: <Icon.Grid size={16} />,
    children: [
      {
        id: "dashboard-apg",
        title: "Dashboard",
        type: "item",
        icon: <Icon.Home size={16} />,
        navLink: "apg/dashboard",
        permissions: ["admin", "editor"]
      },
      {
        id: "vendor-apg",
        title: "Vendor",
        type: "dropdown",
        badge: "primary",
        badgeText: "3",
        icon: <Icon.Home size={16} />,
        children: [
          {
            id: "vendor-apg-aktif",
            title: "Aktif",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/vendor-aktif",
            permissions: ["admin", "editor"]
          },
          {
            id: "vendor-apg-review",
            title: "Dalam Review",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/vendor-review",
            permissions: ["admin"]
          },
          {
            id: "vendor-apg-bermasalah",
            title: "Bermasalah",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/vendor-bermasalah",
            permissions: ["admin"]
          },
          {
            id: "vendor-apg-kategori",
            title: "Kategori",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/vendor-kategori",
            permissions: ["admin"]
          },
          {
            id: "vendor-apg-kelas",
            title: "Kelas",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/vendor-kelas",
            permissions: ["admin"]
          },
          {
            id: "vendor-apg-sbu",
            title: "SBU",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/vendor-sbu",
            permissions: ["admin"]
          },
        ]
      },
      {
        id: "items-apg",
        title: "Item Barang",
        type: "dropdown",
        icon: <Icon.Home size={16} />,
        children: [
          {
            id: "semuaItem",
            title: "Semua Item",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/items-semua",
            permissions: ["admin", "editor"]
          },
          {
            id: "tambahItem",
            title: "Tambah Item",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/items-tambah",
            permissions: ["admin"]
          },
          {
            id: "kategoriItem",
            title: "Kategori",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/items-kategori",
            permissions: ["admin"]
          },
          {
            id: "subKategoriItem",
            title: "Sub Kategori",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/items-sub-kategori",
            permissions: ["admin"]
          },
          {
            id: "satuanItem",
            title: "Satuan",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/items-satuan",
            permissions: ["admin"]
          }
        ]
      },
      {
        id: "katalog-apg",
        title: "Katalog",
        type: "dropdown",
        badge: "primary",
        badgeText: "5",
        icon: <Icon.Home size={16} />,
        children: [
          {
            id: "semuaKatalog",
            title: "Semua Katalog",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/katalog-semua",
            permissions: ["admin", "editor"]
          },
          {
            id: "pemesananKatalog",
            title: "Pemesanan",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/katalog-pemesanan",
            permissions: ["admin"]
          },
          {
            id: "po-expired",
            title: "PO Expired",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/apg/katalog-po-expired",
            permissions: ["admin"]
          }
        ]
      },
      {
        id: "pengguna-apg",
        title: "Pengguna",
        type: "item",
        icon: <Icon.Home size={16} />,
        navLink: "/apg/pengguna-apg",
        permissions: ["admin", "editor"]
      },
      {
        id: "hak-akses-apg",
        title: "Hak Akses",
        type: "item",
        icon: <Icon.Home size={16} />,
        navLink: "/apg/hak-akses-apg",
        permissions: ["admin", "editor"]
      },
    ]
  },
  {
    id: "apps",
    title: "Apps",
    type: "dropdown",
    icon: <Icon.Grid size={16} />,
    children: [
      {
        id: "email",
        title: "Email",
        type: "item",
        icon: <Icon.Mail size={16} />,
        navLink: "/email/:filter",
        filterBase: "/email/inbox",
        permissions: ["admin", "editor"]
      },
      {
        id: "chat",
        title: "Chat",
        type: "item",
        icon: <Icon.MessageSquare size={16} />,
        navLink: "/chat",
        permissions: ["admin", "editor"]
      },
      {
        id: "todo",
        title: "Todo",
        type: "item",
        icon: <Icon.CheckSquare size={16} />,
        navLink: "/todo/:filter",
        filterBase: "/todo/all",
        permissions: ["admin", "editor"]
      },
      {
        id: "calendar",
        title: "Calendar",
        type: "item",
        icon: <Icon.Calendar size={16} />,
        navLink: "/calendar",
        permissions: ["admin", "editor"]
      },
      {
        id: "usersApp",
        title: "User",
        type: "dropdown",
        icon: <Icon.User size={16} />,
        children: [
          {
            id: "userList",
            title: "List",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/app/user/list",
            permissions: ["admin", "editor"]
          },
          {
            id: "userView",
            title: "View",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/app/user/view",
            permissions: ["admin", "editor"]
          },
          {
            id: "userEdit",
            title: "Edit",
            type: "item",
            icon: <Icon.Circle size={10} />,
            navLink: "/app/user/edit",
            permissions: ["admin", "editor"]
          }
        ]
      }
    ]
  }
]

export default horizontalMenuConfig
