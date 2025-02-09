const RecentActivity = ({ title, images }) => {
  return (
    // daftar realtime login dengan status?
    // Request modal yang isinya keterangan dan alasan?
    <div className="">
      <Image src={images} alt="" width={350} height={300} />
      <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
    </div>
  );
};



export {RecentActivity}
