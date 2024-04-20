#pragma once
#include "MObject.h"

template <typename T>
class MSNode
{
public:
    MSNode(T data) : data(data), next_node(nullptr) {}

    T data;
    MSNode* next_node;
};

template <typename T>
class MSList
{
public:
    MSList() : _head(nullptr), _size(0) {}
    ~MSList();

    int get_size() const;
    void add(const T& data);
    T& operator[](int index) const;

private:
    MSNode<T>* _head;
    int _size;
};

#include "MSList.cpp" // 템플릿 클래스 구현을 포함하는 파일
