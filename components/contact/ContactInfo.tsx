'use client';

import ContactHeader from './ContactHeader';
import ContactDetails from './ContactDetails';
import ContactWechat from './ContactWechat';

export default function ContactInfo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">

          {/* 左侧 */}
          <div>
            <ContactHeader />

            <ContactDetails />
          </div>

          {/* 右侧 */}
          <div>
            <ContactWechat />
          </div>

        </div>

      </div>
    </section>
  );
}