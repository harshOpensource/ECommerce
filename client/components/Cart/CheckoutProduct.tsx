import Image from "next/image";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Store/store";
import { useDispatch } from "react-redux";
/* import toast from "react-hot-toast";
 */
import { BsArrowBarDown, BsArrowDown } from "react-icons/bs";
import { Product } from "../../../server/src/types";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

interface Props {
  items: Product;
  id: any;
}

function CheckoutProduct({ id, items }: Props) {
  const dispatch = useDispatch();

  const removeItemFromBasket = (id: any) => {
    dispatch(removeFromCart(id));
  };

  const IncrementQuantity = (id: any) => {
    dispatch(incrementQuantity(id));
  };

  const DecrementQuantity = (id: any) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
      <div className="relative h-56 w-44 rounded-3xl mt-5">
        <Image
          src={items.image[0]}
          layout="fill"
          objectFit="contain"
          alt="image center"
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items.name}</h4>
            <div className="flex items-center gap-x-4 font-semibold">
              <div> {items.quantity} </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <button onClick={() => IncrementQuantity(items)}>
                  <AiOutlineCaretUp className="h-6 w-6 text-blue-500 border-2 border-blue-500 rounded-md" />
                </button>
                <button onClick={() => DecrementQuantity(items)}>
                  <AiOutlineCaretDown className="h-6 w-6 text-blue-500 border-2 border-blue-500 rounded-md" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <AiOutlineCaretDown className="h-6 w-6 ml-3" />
          </div>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">{items.price}</h4>
          <button
            onClick={() => removeItemFromBasket(items)}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
