import React from "react"
import * as Icon from "react-feather"
const apgMenu = [
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
    permissions: ["apg"]
  },
  {
    id: "vendor-apg",
    title: "Vendor",
    type: "collapse",
    badge: "primary",
    badgeText: "3",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "vendor-apg-aktif",
        title: "Aktif",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/vendor-aktif",
        permissions: ["apg"]
      },
      {
        id: "vendor-apg-review",
        title: "Dalam Review",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/vendor-review",
        permissions: ["apg"]
      },
      {
        id: "vendor-apg-bermasalah",
        title: "Bermasalah",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/vendor-bermasalah",
        permissions: ["apg"]
      },
      {
        id: "vendor-apg-kategori",
        title: "Kategori",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/vendor-kategori",
        permissions: ["apg"]
      },
      {
        id: "vendor-apg-kelas",
        title: "Kelas",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/vendor-kelas",
        permissions: ["apg"]
      },
      {
        id: "vendor-apg-sbu",
        title: "SBU",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/vendor-sbu",
        permissions: ["apg"]
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
        permissions: ["apg"]
      },
      {
        id: "tambahItem",
        title: "Tambah Item",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/items-tambah",
        permissions: ["apg"]
      },
      {
        id: "kategoriItem",
        title: "Kategori",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/items-kategori",
        permissions: ["apg"]
      },
      {
        id: "subKategoriItem",
        title: "Sub Kategori",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/items-sub-kategori",
        permissions: ["apg"]
      },
      {
        id: "satuanItem",
        title: "Satuan",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/items-satuan",
        permissions: ["apg"]
      }
    ]
  },
  {
    id: "katalog-apg",
    title: "Katalog",
    type: "collapse",
    badge: "primary",
    badgeText: "5",
    icon: <Icon.Archive size={20} />,
    children: [
      {
        id: "semuaKatalog",
        title: "Semua Katalog",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/katalog-semua",
        permissions: ["apg"]
      },
      {
        id: "detailKatalog",
        title: "Detail Katalog",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/katalog-detail",
        permissions: ["apg"]
      },
      {
        id: "pemesananKatalog",
        title: "Pemesanan",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/katalog-pemesanan",
        permissions: ["apg"]
      },
      {
        id: "po-expired",
        title: "PO Expired",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/apg/katalog-po-expired",
        permissions: ["apg"]
      }
    ]
  },
  {
    id: "pengguna-apg",
    title: "Pengguna",
    type: "item",
    icon: <Icon.Home size={16} />,
    navLink: "/apg/pengguna-apg",
    permissions: ["apg"]
  },
  {
    id: "hak-akses-apg",
    title: "Hak Akses",
    type: "item",
    icon: <Icon.Home size={16} />,
    navLink: "/apg/hak-akses-apg",
    permissions: ["apg"]
  },
  /* hanya untuk mencegah agar tidak bisa diakses oleh apg */
  {type: "item", navLink: "/vendor/dashboard", permissions: ["vendor"]},
  {type: "item", navLink: "/vendor/profil", permissions: ["vendor"]},
  {type: "item", navLink: "/vendor/semua-item", permissions: ["vendor"]},
  {type: "item", navLink: "/vendor/semua-item", permissions: ["vendor"]},
  {type: "item", navLink: "/vendor/stok-kurang", permissions: ["vendor"]},
  {type: "item", navLink: "/vendor/pemesanan", permissions: ["vendor"]},
]
const vendorMenu = [
  {
    type: "groupHeader",
    groupTitle: "VENDOR"
  },
  {
    id: "dashboard-vendor",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    navLink: "/vendor/dashboard",
    permissions: ["vendor"]
  },
  {
    id: "profileVendor",
    title: "Profil",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["vendor"],
    navLink: "/vendor/profil",
  },
  {
    id: "itemBarang",
    title: "Item Barang",
    type: "collapse",
    icon: <Icon.Box size={20} />,
    permissions: ["vendor"],
    navLink: "/vendor/semua-item",
    children: [
      {
        id: "semuaItem",
        title: "Semua Barang",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/vendor/semua-item",
        permissions: ["vendor"]
      },
      {
        id: "stokKurang",
        title: "Stok Kurang",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/vendor/stok-kurang",
        permissions: ["vendor"]
      },
    ]
  },
  {
    id: "pemesananVendor",
    title: "Pemesanan",
    type: "item",
    icon: <Icon.ShoppingBag size={20} />,
    permissions: ["vendor"],
    navLink: "/vendor/pemesanan",
  },
  /* hanya untuk mencegah agar tidak bisa diakses oleh vendor */
  {type: "item", navLink: "/apg/dashboard", permissions: ["apg"]},
  {type: "item", navLink: "/apg/vendor-aktif", permissions: ["apg"]},
  {type: "item", navLink: "/apg/vendor-review", permissions: ["apg"]},
  {type: "item", navLink: "/apg/vendor-bermasalah", permissions: ["apg"]},
  {type: "item", navLink: "/apg/vendor-kategori", permissions: ["apg"]},
  {type: "item", navLink: "/apg/vendor-kelas", permissions: ["apg"]},
  {type: "item", navLink: "/apg/vendor-sbu", permissions: ["apg"]},
  {type: "item", navLink: "/apg/items-semua", permissions: ["apg"]},
  {type: "item", navLink: "/apg/items-tambah", permissions: ["apg"]},
  {type: "item", navLink: "/apg/items-kategori", permissions: ["apg"]},
  {type: "item", navLink: "/apg/items-sub-kategori", permissions: ["apg"]},
  {type: "item", navLink: "/apg/items-satuan", permissions: ["apg"]},
  {type: "item", navLink: "/apg/katalog-semua", permissions: ["apg"]},
  {type: "item", navLink: "/apg/katalog-detail", permissions: ["apg"]},
  {type: "item", navLink: "/apg/katalog-pemesanan", permissions: ["apg"]},
  {type: "item", navLink: "/apg/katalog-po-expired", permissions: ["apg"]},
  {type: "item", navLink: "/apg/pengguna-apg", permissions: ["apg"]},
  {type: "item", navLink: "/apg/hak-akses-apg", permissions: ["apg"]},
]
const navigationConfig = {apgMenu: apgMenu, vendorMenu: vendorMenu}

export default navigationConfig
