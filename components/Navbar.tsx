import Image from 'next/image';

export const Navbar = () => {
	return (
		<nav className="px-1 flex justify-between min-w-full py-3 bg-black text-white" >
			<a href="./" className="flex items-center text-xl gap-2">
				<Image
					src='/unity_logo.svg' 
					width={100}
					height={35}
				/>
				<p>Documentation</p>
			</a>
		</nav>
	)
}
