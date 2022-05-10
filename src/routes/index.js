import Bill from "../pages/Bill";
import BrandPage from "../pages/Brand";
import CategoryPage from "../pages/Category";
import ConfigsPage from "../pages/Configs";
import CreateProductPage from "../pages/CreateProduct";
import OverallPage from "../pages/Overall";
import ProductPage from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import RatePage from "../pages/Rate";
import StaffPage from "../pages/Staff";
import UserPage from "../pages/User";

const mainLayoutRoutes = [
  {
    name: "Tổng quan",
    path: "/",
    component: OverallPage,
    exact: true,
    private: true,
  },
  {
    name: "Sản phẩm",
    path: "/products/create",
    exact: true,
    component: CreateProductPage,
  },
  {
    name: "Sản phẩm",
    path: "/products",
    component: ProductPage,
    exact: true,
    private: true,
  },
  {
    name: "Thể loại",
    path: "/categories",
    component: CategoryPage,
    exact: true,
  },
  {
    name: "Thương hiệu",
    path: "/brands",
    component: BrandPage,
    exact: true,
  },
  {
    name: "Nhân viên",
    path: "/staffs",
    component: StaffPage,
    exact: true,
  },
  {
    name: "Người dùng",
    path: "/users",
    component: UserPage,
    exact: true,
  },
  {
    name: "Đánh giá",
    path: "/rates",
    component: RatePage,
    exact: true,
  },
  {
    name: "ProductDetail",
    path: "/products/:slug",
    component: ProductDetail,
    exact: true,
  },
  {
    name: "Đơn hàng",
    path: "/bills",
    component: Bill,
    exact: true,
  },
  {
    name: "Thông tin",
    path: "/configs",
    component: ConfigsPage,
    exact: true,
  },
];

const routeSystem = {
  mainLayoutRoutes,
};

export default routeSystem;
