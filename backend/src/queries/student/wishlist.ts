import WishList, { IWishList } from "../../models/wishList";




interface IItemsArray {
    itemType: string;
    itemId: string;
  }

  
export const removeItemsFromWishlist = async (
    studentId: string,
    itemsToRemove: Array<IItemsArray>
  ): Promise<void> => {
    await WishList.findOneAndUpdate(
      { studentId },
      {
        $pull: {
          items: {
            itemType: { $in: itemsToRemove.map((item) => item.itemType) },
            itemId: { $in: itemsToRemove.map((item) => item.itemId) },
          },
        },
      },
      {
        runValidators: true,
        new: true,
      }
    );
  };



  export const addItemsToWishList = async (
    studentId: string,
    itemsToAdd: Array<IItemsArray>
  ): Promise<void> => {
    await WishList.findOneAndUpdate(
      { studentId },
      { $push: { items: itemsToAdd } }, // Use $push to add items to the array
      {
        runValidators: true,
        new: true,
        upsert: true, // Creates a new wishlist if it doesn't already exist
      }
    );
  };
  

  
export const findWishListByStudentId = async (
    studentId: string
  ): Promise<IWishList> => {
    const wishlist = await WishList.findOne({ studentId }).lean();
    return wishlist;
  };