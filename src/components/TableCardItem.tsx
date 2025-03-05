interface TableCardItemProps {
  product: {
    product: string;
    soldAmount: number;
    unitPrice: string;
    revenue: string;
    rating: number;
  };
}

const TableCardItem: React.FC<TableCardItemProps> = ({ product }) => {
  return (
    <tr className=" ">
      <td className="text-[15.1px] text-[#8F9093] leading-[18.27px] px-3 py-3.5 font-semibold whitespace-nowrap flex items-center gap-3 ">
        <div
          id="_image"
          className="max-w-[38px] max-h-[39px] bg-[#f3f4f7] rounded-lg p-1 border border-[#d4cbdc]"
        >
          <img
            src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
            alt=""
          />
        </div>
        <span>{product.product}</span>
      </td>
      <td className="px-3 py-3.5 text-[#A2A3A7] whitespace-nowrap text-[13.5px] font-semibold leading-[16.34px]">
        {product.soldAmount}
      </td>
      <td className="px-3 py-3.5 text-[#A2A3A7] whitespace-nowrap text-[13.5px] font-semibold leading-[16.34px]">
        {product.unitPrice}
      </td>
      <td className="px-3 py-3.5 text-[#A2A3A7] whitespace-nowrap text-[13.5px] font-semibold leading-[16.34px]">
        {product.revenue}
      </td>
      <td className="px-3 py-3.5 text-[#A2A3A7] whitespace-nowrap text-[13.5px] font-semibold leading-[16.34px]">
        ⭐ <span>{product.rating}</span>
      </td>
    </tr>
  );
};

export default TableCardItem;
