import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Search, X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useStore } from '../../store/useStore';

export function SearchModal() {
  const { isSearchModalOpen, setSearchModalOpen, searchFilters, updateSearchFilters } = useStore();

  return (
    <Transition show={isSearchModalOpen} as={React.Fragment}>
      <Dialog onClose={() => setSearchModalOpen(false)} className="relative z-50">
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-lg font-medium">
                    Search properties
                  </Dialog.Title>
                  <button onClick={() => setSearchModalOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Where
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Search destinations"
                      value={searchFilters.location}
                      onChange={(e) =>
                        updateSearchFilters({ location: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Check in
                      </label>
                      <DatePicker
                        selected={searchFilters.checkIn}
                        onChange={(date) => updateSearchFilters({ checkIn: date })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        placeholderText="Add dates"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Check out
                      </label>
                      <DatePicker
                        selected={searchFilters.checkOut}
                        onChange={(date) => updateSearchFilters({ checkOut: date })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        placeholderText="Add dates"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Guests
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={searchFilters.guests}
                      onChange={(e) =>
                        updateSearchFilters({ guests: parseInt(e.target.value) })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <button
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center gap-2"
                    onClick={() => setSearchModalOpen(false)}
                  >
                    <Search size={20} />
                    Search
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}