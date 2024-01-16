import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingItem = ({ listing }) => {
  console.log(listing);
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listings/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeNTWRIdYwzousHtWl43i39K6LB6IEks17A&usqp=CAU"
          }
          alt='Listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-4'>
          <p className='text-lg font-semibold text-slate-700 truncate'>
            {listing.name}
          </p>
          <p className='flex gap-2 items-center'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <span className='text-sm text-gray-600 truncate'>
              {listing.address}
            </span>
          </p>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-500 mt-2 font-semibold flex items-center'>
            $
            {listing.offer
              ? listing.discountedPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className='flex items-center gap-3 font-bold text-xs text-slate-700'>
            <p>
              {listing.bedrooms > 1
                ? `${listing.bedrooms}  beds`
                : `${listing.bedrooms} bed`}
            </p>
            <p>
              {listing.bathrooms > 1
                ? `${listing.bathrooms}  bath`
                : `${listing.bathrooms} bath`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
