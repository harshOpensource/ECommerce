import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Products from "@/components/Dashboard/Tables/Products";
import CreateProduct from "../../components/Dashboard/Modals/AddProduct";

type Props = {};

function products({}: Props) {
  return (
    <div>
      <div className="flex">
        <Sidebar page="products" />

        <main className="ml-20 w-full bg-gray-100">
          <CreateProduct />
          <Products />
        </main>
      </div>
    </div>
  );
}

export default products;
