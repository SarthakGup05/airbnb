import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { useStore } from '../../store/useStore';

export function LoginModal() {
  const { isLoginModalOpen, setLoginModalOpen } = useStore();

  return (
    <Transition show={isLoginModalOpen} as={React.Fragment}>
      <Dialog onClose={() => setLoginModalOpen(false)} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-lg font-medium">
                    Log in or sign up
                  </Dialog.Title>
                  <button onClick={() => setLoginModalOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                    Continue
                  </button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                      <img
                        src="https://authjs.dev/img/providers/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                      Google
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}