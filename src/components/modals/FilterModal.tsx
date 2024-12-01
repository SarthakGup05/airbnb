import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { useStore } from '../../store/useStore';

export function FilterModal() {
  const { isFilterModalOpen, setFilterModalOpen, searchFilters, updateSearchFilters } = useStore();

  return (
    <Transition show={isFilterModalOpen} as={React.Fragment}>
      <Dialog onClose={() => setFilterModalOpen(false)} className="relative z-50">
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
                    Filters
                  </Dialog.Title>
                  <button onClick={() => setFilterModalOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Price range</h3>
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        placeholder="Min price"
                        value={searchFilters.priceRange[0]}
                        onChange={(e) =>
                          updateSearchFilters({
                            priceRange: [
                              parseInt(e.target.value),
                              searchFilters.priceRange[1],
                            ],
                          })
                        }
                      />
                      <input
                        type="number"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        placeholder="Max price"
                        value={searchFilters.priceRange[1]}
                        onChange={(e) =>
                          updateSearchFilters({
                            priceRange: [
                              searchFilters.priceRange[0],
                              parseInt(e.target.value),
                            ],
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Property type</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['All', 'House', 'Apartment', 'Villa', 'Cabin'].map(
                        (type) => (
                          <button
                            key={type}
                            className={`p-4 rounded-lg border ${
                              searchFilters.propertyType === type
                                ? 'border-primary bg-primary/10'
                                : 'border-gray-300'
                            }`}
                            onClick={() =>
                              updateSearchFilters({ propertyType: type })
                            }
                          >
                            {type}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      className="flex-1 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition"
                      onClick={() => setFilterModalOpen(false)}
                    >
                      Clear all
                    </button>
                    <button
                      className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                      onClick={() => setFilterModalOpen(false)}
                    >
                      Show results
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