import { ReactElement } from 'react'

export default function About(): ReactElement {
  return (
    <div className="w-full space-y-5">
      <h2 className="text-3xl">Profile</h2>

      <div className="flex flex-col sm:flex-row">
        <div className="border-gray-200 sm:w-2/3 sm:border-r">
          <p className="mr-10 leading-relaxed">
            東京在住のフリーランスフルスタックエンジニア、プログラミング講師の飼鳥晴康です。
            <br />
            大学では数学とプログラミングを専攻。
            <br />
            大手SIerで8年間SoftwareEngineerとして車載開発に携わり、複数のプログラミング言語を自在に操る。
            <br />
            英語は得意ではなかったが、国際カンファレンスに出席することがきっかけで英語を学び、英語の楽しさに目覚める。
            <br />
            30歳の新たな挑戦として海外に行くことを決意。
            <br />
            映画好きだったこともあり、カナダのバンクーバーでVFXを学び、モントリオールでハリウッド映画の製作に携わる。
            <br />
            帰国後、フリーランスフルスタックエンジニアとして独立。
            <br />
            <br />
            ■得意分野
            <br />
            React + DjangoのSaaSプロダクトの開発が得意です。
            <br />
            ・フロントエンドはJavaScript(Vue、React)
            <br />
            ・バックエンドはPython(Django)
            <br />
            <br />
            ■発信
            <br />
            プログラミング講師として下記教材を作成しながら、オンラインで日々マンツーマン指導をしています。
            <br />
          </p>
        </div>

        <div className="text-center sm:w-1/3">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="title-font mt-4 text-gray-900 text-lg font-medium">
              飼鳥 晴康
            </h2>
            <div className="mb-4 mt-2 w-12 h-1 bg-indigo-500 rounded"></div>
            <p className="text-base">
              フルスタックエンジニア
              <br />
              プログラミング講師
              <br />
              (Python/Django/React/NextJS)
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl">Experience</h2>

      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-col flex-shrink-0 mb-6 md:mb-0 md:w-64">
          <p className="title-font text-lg font-medium">プログラミング講師</p>
          <p className="mt-1 text-gray-500 text-sm">2020/01/01 - 2021/01/01</p>
          <p className="mt-1 text-gray-500 text-sm">東京</p>
        </div>
        <div className="md:flex-grow">
          <h2 className="title-font mb-2 text-lg font-medium">
            〇〇〇株式会社
          </h2>
          <p className="leading-relaxed">
            《担当業務》
            <br /> ・オンラインでマンツーマン指導
            <br />
            ・プログラミング教材作成(Djangoチュートリアル多数)
            <br />
            ・デイトラPythonコース上級編担当 《スキル》 ・Python、Django
            <br />
            ・HTML、CSS、JavaScript、Vue.js
            <br />
            ・データベース、VPS、デプロイ、Docker、Firebaseなど
            <br />
          </p>
        </div>
      </div>

      <h2 className="text-3xl">Education</h2>

      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-col flex-shrink-0 mb-6 md:mb-0 md:w-64">
          <p className="title-font text-lg font-medium">
            FX TD Houdini Program
          </p>
          <p className="mt-1 text-gray-500 text-sm">2020/01/01 - 2021/01/01</p>
          <p className="mt-1 text-gray-500 text-sm">東京</p>
        </div>
        <div className="md:flex-grow">
          <h2 className="title-font mb-2 text-lg font-medium">
            Lost Boys School of Visual Effects
          </h2>
          <p className="leading-relaxed">VFXの知識を取得</p>
        </div>
      </div>

      <h2 className="text-3xl">Software Skills</h2>
    </div>
  )
}
