import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/"
      },
      {
        id: "eCommerceDash",
        title: "eCommerce",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      }
    ]
  },

  {
    type: "groupHeader",
    groupTitle: "APG"
  },
  {
    id: "dashboard-apg",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    navLink: "/dashboard-apg",
    permissions: ["admin", "editor"]
  },
  {
    id: "vendor",
    title: "Vendor",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "aktif",
        title: "Aktif",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/aktif",
        permissions: ["admin", "editor"]
      },
      {
        id: "review",
        title: "Dalam Review",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/review",
        permissions: ["admin"]
      },
      {
        id: "kategori",
        title: "Kategori",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/kategori",
        permissions: ["admin"]
      },
      {
        id: "kelas",
        title: "Kelas",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/kelas",
        permissions: ["admin"]
      },
      {
        id: "sbu",
        title: "SBU",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/sbu",
        permissions: ["admin"]
      }
    ]
  },
  {
    id: "item",
    title: "Item Barang",
    type: "collapse",
    icon: <Icon.Briefcase size={20} />,
    children: [
      {
        id: "semua",
        title: "Semua Item",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/items",
        permissions: ["admin", "editor"]
      },
      {
        id: "tambah",
        title: "Tambah Item",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/tambah",
        permissions: ["admin"]
      },
      {
        id: "kategoribarang",
        title: "Kategori",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/kategori-barang",
        permissions: ["admin"]
      },
      {
        id: "subkategori",
        title: "Sub Kategori",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/sub-kategori",
        permissions: ["admin"]
      },
      {
        id: "satuan",
        title: "Satuan",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/satuan",
        permissions: ["admin"]
      }
    ]
  },
  {
    id: "katalog",
    title: "Katalog",
    type: "collapse",
    icon: <Icon.Archive size={20} />,
    children: [
      {
        id: "katalogitem",
        title: "Katalog",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/katalog",
        permissions: ["admin", "editor"]
      },
      {
        id: "pemesanan",
        title: "Pemesanan",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/pemesanan",
        permissions: ["admin"]
      },
      {
        id: "po-expired",
        title: "PO Expired",
        type: "item",
        icon: <Icon.Circle size={10} />,
        navLink: "/po-expired",
        permissions: ["admin"]
      }
    ]
  },
  {
    id: "pengguna",
    title: "Pengguna",
    type: "item",
    icon: <Icon.User size={20} />,
    navLink: "/pengguna",
    permissions: ["admin", "editor"]
  },
  {
    id: "akses",
    title: "Hak Akses",
    type: "item",
    icon: <Icon.Lock size={20} />,
    navLink: "/akses",
    permissions: ["admin", "editor"]
  },
  {
    type: "groupHeader",
    groupTitle: "APPS"
  },
  {
    id: "email",
    title: "Email",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/vendor/dashboard",
  },
  {
    id: "profileVendor",
    title: "Profil",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/vendor/profil",
  },

  {
    id: "knowledgeBase",
    title: "Knowledge Base",
    type: "item",
    icon: <Icon.Info size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/knowledge-base",
    parentOf: [
      "/pages/knowledge-base/category/questions",
      "/pages/knowledge-base/category"
    ]
  },
  {
    id: "search",
    title: "Search",
    type: "item",
    icon: <Icon.Search size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/search"
  },

  {
    id: "invoice",
    title: "Invoice",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/invoice"
  },

  {
    id: "authentication",
    title: "Authentication",
    type: "collapse",
    icon: <Icon.Unlock size={20} />,
    children: [
      {
        id: "login",
        title: "Login",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/login",
        newTab: true
      },
      {
        id: "register",
        title: "Register",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/register",
        newTab: true
      },
      {
        id: "forgotPassword",
        title: "Forgot Password",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/forgot-password",
        newTab: true
      },
      {
        id: "resetPassword",
        title: "Reset Password",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/reset-password",
        newTab: true
      },
      {
        id: "lockScreen",
        title: "Lock Screen",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/lock-screen",
        newTab: true
      }
    ]
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    type: "collapse",
    icon: <Icon.FileText size={20} />,
    children: [
      {
        id: "comingSoon",
        title: "Coming Soon",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/misc/coming-soon",

        newTab: true
      },
      {
        id: "error",
        title: "Error",
        type: "collapse",
        icon: <Icon.Circle size={12} />,
        children: [
          {
            id: "404",
            title: "404",
            type: "item",

            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/misc/error/404",

            newTab: true
          },
          {
            id: "500",
            title: "500",
            type: "item",

            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/misc/error/500",

            newTab: true
          }
        ]
      },
      {
        id: "notAuthorized",
        title: "Not Authorized",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/misc/not-authorized",

        newTab: true
      },
      {
        id: "maintenance",
        title: "Maintenance",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/misc/maintenance",

        newTab: true
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "CHARTS & MAPS"
  },
  {
    id: "charts",
    title: "Charts",
    type: "collapse",
    badge: "success",
    badgeText: "3",
    icon: <Icon.PieChart size={20} />,
    children: [
      {
        id: "apex",
        title: "Apex",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/charts/apex"
      },
      {
        id: "chartJs",
        title: "ChartJS",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/charts/chartjs"
      },
      {
        id: "recharts",
        title: "Recharts",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/charts/recharts"
      }
    ]
  },
  {
    id: "leafletMaps",
    title: "Leaflet Maps",
    icon: <Icon.Map size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/maps/leaflet"
  },
  {
    type: "groupHeader",
    groupTitle: "EXTENSIONS"
  },
  {
    id: "sweetAlert",
    title: "Sweet Alerts",
    icon: <Icon.AlertCircle size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/sweet-alert"
  },
  {
    id: "toastr",
    title: "Toastr",
    icon: <Icon.Zap size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/toastr"
  },
  {
    id: "rcSlider",
    title: "Rc Slider",
    icon: <Icon.Sliders size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/slider"
  },
  {
    id: "fileUploader",
    title: "File Uploader",
    icon: <Icon.UploadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/file-uploader"
  },
  {
    id: "wysiwygEditor",
    title: "Wysiwyg Editor",
    icon: <Icon.Edit size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/wysiwyg-editor"
  },
  {
    id: "drag_&_drop",
    title: "Drag & Drop",
    icon: <Icon.Droplet size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/drag-and-drop"
  },
  {
    id: "tour",
    title: "Tour",
    icon: <Icon.Info size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/tour"
  },
  {
    id: "clipBoard",
    title: "Clipboard",
    icon: <Icon.Copy size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/clipboard"
  },
  {
    id: "contentMenu",
    title: "Context Menu",
    icon: <Icon.Menu size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/context-menu"
  },
  {
    id: "swiper",
    title: "Swiper",
    icon: <Icon.Smartphone size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/swiper"
  },
  {
    id: "access-control",
    title: "Access Control",
    icon: <Icon.Lock size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/access-control"
  },
  {
    id: "i18n",
    title: "I18n",
    icon: <Icon.Globe size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/i18n"
  },
  {
    id: "treeView",
    title: "Tree",
    icon: <Icon.GitPullRequest size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/tree"
  },
  {
    id: "extPagination",
    title: "Pagination",
    icon: <Icon.MoreHorizontal size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/pagination"
  },
  {
    id: "extImport",
    title: "Import",
    icon: <Icon.DownloadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/import"
  },
  {
    id: "extExport",
    title: "Export",
    icon: <Icon.UploadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/export"
  },
  {
    id: "extExportSelected",
    title: "Export Selected",
    icon: <Icon.CheckSquare size={20} />,
    type: "item",
    navLink: "/extensions/export-selected",
    permissions: ["admin", "editor"]
  },
  {
    type: "groupHeader",
    groupTitle: "OTHERS"
  },
  {
    id: "menuLevels",
    title: "Menu Levels",
    icon: <Icon.Menu size={20} />,
    type: "collapse",
    children: [
      {
        id: "secondLevel",
        title: "Second Level",
        icon: <Icon.Circle size={12} />,
        type: "item",
        permissions: ["admin", "editor"],
        navlink: ""
      },
      {
        id: "secondLevel1",
        title: "Second Level",
        icon: <Icon.Circle size={12} />,
        type: "collapse",

        children: [
          {
            id: "ThirdLevel",
            title: "Third Level",
            icon: <Icon.Circle size={12} />,
            type: "item",
            permissions: ["admin", "editor"],
            navLink: ""
          },
          {
            id: "ThirdLevel1",
            title: "Third Level",
            icon: <Icon.Circle size={12} />,
            type: "item",
            permissions: ["admin", "editor"],
            navLink: ""
          }
        ]
      }
    ]
  },
  {
    id: "disabledMenu",
    title: "Disabled Menu",
    icon: <Icon.EyeOff size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "#",
    disabled: true
  },
  {
    type: "groupHeader",
    groupTitle: "SUPPORT"
  },
  {
    id: "documentation",
    title: "Documentation",
    icon: <Icon.Folder size={20} />,
    type: "external-link",
    permissions: ["admin", "editor"],
    navLink:
      "https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation"
  },
  {
    id: "raiseSupport",
    title: "Raise Support",
    icon: <Icon.LifeBuoy size={20} />,
    type: "external-link",
    newTab: true,
    permissions: ["admin", "editor"],
    navLink: "https://pixinvent.ticksy.com/"
  }
]

export default navigationConfig
