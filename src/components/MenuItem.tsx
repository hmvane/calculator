import type { MenuItem } from "../types"

type MenuitemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuitemProps) {
    return (
        <button className="border-2 border-gray-200 hover:bg-gray-100 w-full p-3 justify-between rounded-lg"
            onClick={() => addItem(item)}>
            <p>
                {item.name}
            </p>
            <p className="font-black">
                ${item.price}
            </p>
        </button>
    )
}
