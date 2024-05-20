import TopBadge from "./TopBadge";

export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-center">
                <TopBadge />
            </div>
        </header>
    )
}