#include "MSList.h"
#include <iostream>
template <typename T>
MSList<T>::~MSList() {
    MSNode<T>* current = _head;
    while (current != nullptr) {
        MSNode<T>* next = current->next_node;
        delete current;
        current = next;
    }
}

template <typename T>
int MSList<T>::get_size() const {
    return _size;
}

template <typename T>
void MSList<T>::add(const T& data) {
    MSNode<T>* new_node = new MSNode<T>(data);
    new_node->next_node = _head;
    _head = new_node;
    _size++;
}

template <typename T>
T& MSList<T>::operator[](int index) const {
    if (index < 0 || index >= _size) {
        throw std::out_of_range("Index out of range");
    }

    MSNode<T>* current = _head;
    for (int i = 0; i < index; i++) {
        current = current->next_node;
    }

    return current->data;
}
