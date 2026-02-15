import { ArrowLeft } from "lucide-react";

interface CommercialTransactionProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export const CommercialTransaction: React.FC<CommercialTransactionProps> = ({
  isDarkMode,
  onBack,
}) => {
  return (
    <article className="animate-in">
      <button
        onClick={onBack}
        className={`group flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-12 transition-colors ${
          isDarkMode
            ? "text-neutral-500 hover:text-white"
            : "text-neutral-400 hover:text-neutral-900"
        }`}
      >
        <ArrowLeft
          size={14}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span>Back</span>
      </button>

      <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
        特定商取引法に基づく表記
      </h1>
      <p
        className={`text-sm mb-12 ${
          isDarkMode ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        最終更新日: 2026年2月15日
      </p>

      <div
        className={`text-[15px] leading-relaxed ${
          isDarkMode ? "text-neutral-300" : "text-neutral-700"
        }`}
      >
        <table className="w-full border-collapse">
          <tbody>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap w-40 ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                販売事業者
              </th>
              <td className="py-4">
                個人事業主（請求があった場合に遅滞なく開示いたします）
              </td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                所在地
              </th>
              <td className="py-4">請求があった場合に遅滞なく開示いたします</td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                電話番号
              </th>
              <td className="py-4">請求があった場合に遅滞なく開示いたします</td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                メールアドレス
              </th>
              <td className="py-4">
                <a
                  href="mailto:oculay3e7@gmail.com"
                  className="underline underline-offset-4"
                >
                  oculay3e7@gmail.com
                </a>
              </td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                サービス名
              </th>
              <td className="py-4">OSHI（Chrome拡張機能）</td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                サービスURL
              </th>
              <td className="py-4">
                <a href="/projects/oshi" className="underline underline-offset-4">
                  https://journalloggy.vercel.app/projects/oshi
                </a>
              </td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                販売価格
              </th>
              <td className="py-4">
                <p>月額298円（税込）</p>
                <p className="mt-1 text-sm opacity-75">
                  本サービスには無料プランと有料プラン（Premiumプラン）があります。上記の販売価格は有料プランの料金です。
                </p>
              </td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                販売価格以外の
                <br />
                必要料金
              </th>
              <td className="py-4">
                なし（インターネット接続料金等はお客様のご負担となります）
              </td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                支払方法
              </th>
              <td className="py-4">クレジットカード（Stripe経由）</td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                支払時期
              </th>
              <td className="py-4">
                サブスクリプション登録時に初回決済が行われ、以降毎月自動で課金されます
              </td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                サービス提供時期
              </th>
              <td className="py-4">決済完了後、直ちにご利用いただけます</td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                解約・返金
              </th>
              <td className="py-4">
                <ul className="list-disc pl-5 space-y-1">
                  <li>ユーザーはいつでもサブスクリプションを解約できます</li>
                  <li>
                    解約は拡張機能の設定画面内「アカウント」からサブスクリプション管理画面にて手続きできます
                  </li>
                  <li>
                    解約後も、当該課金期間の終了時まで有料機能をご利用いただけます
                  </li>
                  <li>日割り計算による返金は行いません</li>
                  <li>
                    デジタルサービスの性質上、提供開始後の返品はお受けできません
                  </li>
                  <li>
                    サービス側の不具合により利用できなかった場合は、個別に対応いたします
                  </li>
                </ul>
              </td>
            </tr>
            <tr
              className={`border-b ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <th
                className={`text-left py-4 pr-6 align-top font-bold whitespace-nowrap ${
                  isDarkMode ? "text-neutral-200" : "text-neutral-900"
                }`}
              >
                動作環境
              </th>
              <td className="py-4">Google Chrome ブラウザ（最新版を推奨）</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
