"use client";

import CommonHeading from "../common/CommonHeading"
import CommonPera from "../common/CommonPera"

const ContentTabs = () => {
    const contentData = [
        {
            img : "/assets/csr/tabImg/1.webp",
            title : "education",
            description : "Focusing on the education of underprivileged students who can't complete their education due to socio-economic reasons. Sizeable donations were made to the Children Education Society, Delhi Public School (RK Puram), Prayas Social Welfare Society, Sambhav Foundation, FDDI and Blossom Public School, aside from other notable societies. Children Education Society is a non-profit that is committed to educating underprivileged children who can't attain proper education due to socioeconomic reasons."
        },
        {
            img : "/assets/csr/tabImg/2.webp",
            title : "employment",
            description : "In collaboration with Divya Chaya Trust and Rainbow Foundation India, several vocational skill programs were provided to women so they could increase their employment opportunities. Divya Chaya Trust in Palam Vihar, Delhi is one of the topmost Charitable Trusts that aims to educate, support and rehabilitate underprivileged children."
        },
        {
            img : "/assets/csr/tabImg/3.webp",
            title : "rural development",
            description : "Undertaking eye centres for charitable operations of underprivileged disabled people. It was a collaborative effort with Charities Aid Foundation and the National Thallesemia Welfare Society. Donations were made to Delhi Chinmaya Sewa Trust and Beti foundation in order to promote social and cultural activities. Beti Foundation is a non-profit, providing free education to children and ladies begging at traffic signals."
        }
    ]
  return (
   <section className="contenttab relative bg-[#FBF6F6] w-full">
  {contentData.map((content, i) => (
    <div key={i} className="grid grid-cols-12 py-10 gap-10 border-b">
      {/* Image */}
      <div
        className={`col-span-6 ${
          i % 2 === 1 ? "order-last" : "order-first"
        }`}
      >
        <div className={`tab_img flex w-full h-full ${
          i % 2 === 1 ? "justify-end" : "justify-start"
        }`}>
          <img src={content.img} alt={content.title} />
        </div>
      </div>

      {/* Text */}
      <div
        className={`col-span-6 flex items-center h-full ${
          i % 2 === 1 ? "justify-start" : "justify-end"
        }`}
      >
        <div className="tab_content space-y-5">
          <CommonHeading>{content.title}</CommonHeading>
          <CommonPera extraClass="text-justify">
            {content.description}
          </CommonPera>
        </div>
      </div>
    </div>
  ))}
</section>

  )
}

export default ContentTabs