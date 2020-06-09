import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  // {
  //   id: "dashboard",
  //   title: "Dashboard",
  //   type: "collapse",
  //   icon: <Icon.Home size={20} />,
  //   badge: "warning",
  //   badgeText: "2",
  //   children: [
  //     {
  //       id: "analyticsDash",
  //       title: "Analytics",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/"
  //     },
  //     {
  //       id: "eCommerceDash",
  //       title: "eCommerce",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin"],
  //       navLink: "/ecommerce-dashboard"
  //     }
  //   ]
  // },

  {
    type: "groupHeader",
    groupTitle: "APG"
  },
  {
    id: "dashboard-apg",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    navLink: "/apg/dashboard",
    permissions: ["admin", "editor"]
  },
  {
    id: "vendor-apg",
    title: "Vendor",
    type: "collapse",
    icon: <Icon.Users size={20} />,
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
      }
    ]
  },
  {
    id: "items-apg",
    title: "Item Barang",
    type: "collapse",
    icon: <Icon.Briefcase size={20} />,
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
    type: "collapse",
    icon: <Icon.Archive size={20} />,
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
        id: "detailKatalog",
        title: "Detail Katalog",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/katalog-detail",
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
  // {
  //   id: "email",
  //   title: "Email",
  //   type: "item",
  //   icon: <Icon.Home size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/vendor/dashboard",
  // },

  {
    type: "groupHeader",
    groupTitle: "VENDOR"
  },
  {
    id: "profileVendor",
    title: "Profil",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/vendor/profil",
  },
  // {
  //   id: "profileVendor",
  //   title: "Profil",
  //   type: "collapse",
  //   icon: <Icon.User size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/vendor/profil",
  //   children: [
  //     {
  //       id: "profile",
  //       title: "Profil Akun",
  //       type: "item",
  //       icon: <Icon.Circle size={10} />,
  //       navLink: "/vendor/profil",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "editProfile",
  //       title: "Ubah Profil",
  //       type: "item",
  //       icon: <Icon.Circle size={10} />,
  //       navLink: "/vendor/ubah-profil",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "dokumen",
  //       title: "Dokumen",
  //       type: "item",
  //       icon: <Icon.Circle size={10} />,
  //       navLink: "/vendor/dokumen",
  //       permissions: ["admin", "editor"]
  //     },
  //   ]
  // },

{
  id: "itemBarang",
  title: "Item Barang",
  type: "collapse",
  icon: <Icon.Box size={20} />,
  permissions: ["admin", "editor"],
  navLink: "/vendor/semua-item",
  children: [
    // {
    //   id: "tambahItem",
    //   title: "Tambah Item",
    //   type: "item",
    //   icon: <Icon.Circle size={10} />,
    //   navLink: "/vendor/tambah-item",
    //   permissions: ["admin", "editor"]
    // },
    {
      id: "semuaItem",
      title: "Semua Barang",
      type: "item",
      icon: <Icon.Circle size={10} />,
      navLink: "/vendor/semua-item",
      permissions: ["admin", "editor"]
    },
    {
      id: "stokKurang",
      title: "Stok Kurang",
      type: "item",
      icon: <Icon.Circle size={10} />,
      navLink: "/vendor/stok-kurang",
      permissions: ["admin", "editor"]
    },
  ]
  },

  // {
  //   id: "knowledgeBase",
  //   title: "Knowledge Base",
  //   type: "item",
  //   icon: <Icon.Info size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/pages/knowledge-base",
  //   parentOf: [
  //     "/pages/knowledge-base/category/questions",
  //     "/pages/knowledge-base/category"
  //   ]
  // },
  // {
  //   id: "search",
  //   title: "Search",
  //   type: "item",
  //   icon: <Icon.Search size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/pages/search"
  // },

  // {
  //   id: "invoice",
  //   title: "Invoice",
  //   type: "item",
  //   icon: <Icon.File size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/pages/invoice"
  // },
  // {
  //   id: "authentication",
  //   title: "Authentication",
  //   type: "collapse",
  //   icon: <Icon.Unlock size={20} />,
  //   children: [
  //     {
  //       id: "login",
  //       title: "Login",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/pages/login",
  //       newTab: true
  //     },
  //     {
  //       id: "register",
  //       title: "Register",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/pages/register",
  //       newTab: true
  //     },
  //     {
  //       id: "forgotPassword",
  //       title: "Forgot Password",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/pages/forgot-password",
  //       newTab: true
  //     },
  //     {
  //       id: "resetPassword",
  //       title: "Reset Password",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/pages/reset-password",
  //       newTab: true
  //     },
  //     {
  //       id: "lockScreen",
  //       title: "Lock Screen",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/pages/lock-screen",
  //       newTab: true
  //     }
  //   ]
  // },
  // {
  //   id: "miscellaneous",
  //   title: "Miscellaneous",
  //   type: "collapse",
  //   icon: <Icon.FileText size={20} />,
  //   children: [
  //     {
  //       id: "comingSoon",
  //       title: "Coming Soon",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/misc/coming-soon",

  //       newTab: true
  //     },
  //     {
  //       id: "error",
  //       title: "Error",
  //       type: "collapse",
  //       icon: <Icon.Circle size={12} />,
  //       children: [
  //         {
  //           id: "404",
  //           title: "404",
  //           type: "item",

  //           icon: <Icon.Circle size={12} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/misc/error/404",

  //           newTab: true
  //         },
  //         {
  //           id: "500",
  //           title: "500",
  //           type: "item",

  //           icon: <Icon.Circle size={12} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/misc/error/500",

  //           newTab: true
  //         }
  //       ]
  //     },
  //     {
  //       id: "notAuthorized",
  //       title: "Not Authorized",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/misc/not-authorized",

  //       newTab: true
  //     },
  //     {
  //       id: "maintenance",
  //       title: "Maintenance",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/misc/maintenance",

  //       newTab: true
  //     }
  //   ]
  // }
]

export default navigationConfig
