# Tutorial

## Полезные ссылки

1. [React TypeScript видео](https://www.youtube.com/watch?v=92qcfeWxtnY)
2. [Тесты видео](https://www.youtube.com/watch?v=y2emL1fMRyY&t=2514s)
3. [Chakra](https://chakra-ui.com/getting-started)
4. [Storybook](https://storybook.js.org/docs/react/writing-stories/introduction)
5. [Feature sliced design](https://feature-sliced.design/ru/docs/get-started/overview)
6. [Feature sliced design видео](https://youtu.be/c3JGBdxfYcU?t=1620)

Подумал что хороше было бы сделать что-то типо туториала по нашему проекту, чтобы мы все писали код в одном стиле, плюс у вас было понимание как работать с технологиями, которые тут уже есть :)

В проекте уже настроены eslint, prettier, jest(тесты), storybook. Их конфиги не трогайте, ну только в самом крайнем случае и то лучше сначала написать в общую конфу по этому поводу. Потому что настроить эти штуки (особенно последние две) было довольно сложно :confused:

На этой ветке есть тестовый компонент, который я взял из старого скетча, сверстал его, добавил маленькую логику, сделал стори и добавил тесты, чтобы вы могли посмотреть как это все выглядит, ну и можете в целом на этой ветке играться как хотите, я разрешаю :sunglasses:


### Верстка
Я решил взять вот этот компонент ->
![component](https://imgur.com/7WZ5G9A.jpg)

Он находится в разделе с челенджами, обладает бизнес логикой показа процентов достижения результата в какой-то категории. А значит в fsd арихитектуре нам надо запихать его в папку entities.

У меня получился такой путь: ``src/entities/Challenge/ui/CircleWithPercent.tsx``

О том как рассполагать в папочках компоненты, функции можете посмотреть в видосике про fsd.

Потом сверстал компонент. В chakra ui очень много компонентов, и если вы думаете как сделать кружочек через border-radius, то лучше сначала посмотрите в библиотеке компонентов нет ли там уже готового кружочка.
Но все же стили нам, конечно, нужны. В этой библиотеке они описываются прямо в компоненте. Просто начинайте писать примерное название как в css и typescript скорей всего подскажет вам нужное свойство. 

Но есть еще и специальные свойства не из css. Например, здесь есть size. Нужен указать размер кружочка. Все это можно посмотреть в документации.

Так же я настроил eslint таким образом, чтобы он ругался на почти все у чего нет типа. Чтобы сразу же исключить большую часть багов. Поэтому к каждому компоненту надо добавлять тип. В данном случае это ``ComponentType``, а то что находится внутри знаков неравенства называется дженериком. (вроде как) Этот дженерик позволяет нам ``ComponentType`` дополнить интерфейсом, в котором описаны пропсы для компонента. Теперь будет автокомплит при написании пропсов в фигурных скобочках. 
```tsx
import {Circle, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

import getNumberWithPercent from '../../lib/helpers/getNumberWithPercent'

interface IProps {
  percent: number
}

const CircleWithPercent: ComponentType<IProps> = ({percent}) => {
  return (
    <Circle size='100px' bgColor='blue.200'>
      <Text fontSize='2xl'>{getNumberWithPercent(percent)}</Text>
    </Circle>
  )
}

export default CircleWithPercent
```

### Логика
Чтобы сделать хоть какую-то логику я решил, что конкатенацию значения процентов и самого значка процентов можно вынести в отдельную функцию.

По архитектуре эта функция пошла в папку ``src/entities/Challenge/lib/helpers/getNumberWithPercent.ts``

Но скорей всего я тут допустил ошибку и эту функцию еще надо было в свою папочку запихать, потому что для нее еще есть тест. Но, возможно, можно и не пихать все хелперы по разным папкам.

В этом примере можно посмотреть как типизриовать обычные функции. Надеюсь вы быстро с ts  подружитесь. Получилась функция, которая проверяет вообще есть ли число, проверяет граничные условия, чтобы проценты не вышли за пределы или если все норм просто возвращает число со значком процента. Так же желательно писать комментарий описывающий, что делает функция. И еще в eslint стоит такая настройка, которая не разрешает использовать "магические числа". Типо если вводите 100, то надо пояснить, что значит - это 100. Эта штука полезна для того, чтобы мы ревьюили код друг друга и понимали сразу откуда взялось то или иное число. Но эта настройка не дкйствует в jsx коде, так что там можете писать какие угодно числа.
```ts
// concatenate number of percent with percent symbol
const getNumberWithPercent = (percent: number): string => {
  const minPercent = 0
  const maxPercent = 100

  if (!percent) {
    return '0%'
  }

  if (percent < minPercent) {
    return minPercent + '%'
  }

  if (percent > maxPercent) {
    return maxPercent + '%'
  }

  return percent + '%'
}

export default getNumberWithPercent

```

### Стори
Перейдем к волшебству, с которым я сам только только разобрался.

Чтобы его запустить надо написать ``yarn storybook``

Стори создается в той же папке, что и компонент, но только с припиской stoies. То есть ``CircleWithPercent.stories.tsx``.

```tsx
import {ComponentStory, ComponentMeta} from '@storybook/react'

import CircleWithPercent from './CircleWithPercent'

export default {
  title: 'entities/Challenge/CircleWithPercent',
  component: CircleWithPercent,
  args: {
    percent: 45
  },
  argTypes: {
    percent: {control: 'number'}
  }
} as ComponentMeta<typeof CircleWithPercent>

export const Primary: ComponentStory<typeof CircleWithPercent> = args => (
  <CircleWithPercent {...args} />
)
```

Сложно как-то объяснять, что ты и сам только недавно понял, но в общем тут указываете название компонента, с папочками все как полагается. Потом желательно указать нужные дефолтные аргументы для компонента. Еще можно настроить контроль изменения значения. 

То есть здесь вот написано ``percent: {control: 'number'}`` - это значит, что инпут для изменения процентов будет специальный для циферок. Еще вроде можно указать color, тогда будет color picker. Но это все надо смотреть в документации.

### Тесты
На счет тестов можете посмотреть в видео выше. Очень желательно писать их к каждой функции и компоненту. Но там по ситуации. Тут тоже лежит два теста, можете посмотреть как они написаны.


### Гит

В заключении хотел бы рассказать как тут настроен прекоммит.
Хотя у нас может поменяться гит флоу, но пока думаю лучше будем делать вот так, потому что так меня учили на прошлой стажировке :)

Есть мастер ветка - ее трогаем только когда уверены, что в деве лежит хороший код без огромного количества багов. Для каждой фичи создаем ветку от дева. Иногда возможно будут такие случаи, что даже придется создавать ветку фичи от ветки фичи, но надеюсь, что такой жести не будет.

Прекоммитер использует yarn, так что если у кого-то npm, то надо бы поставить yarn.

Плюс мы используем [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - это штука, чтобы у нас коммиты были в одном стиле и удобно читаемые.

Но чтобы самому не прописывать коммиты в таком стиле я поставил удобную [штуку](https://github.com/commitizen/cz-cli)

Для для начала ее надо установить ``npm install -g commitizen``.

Потом когда вы решите, что пора коммититься, то сначала запустите претьер ``yarn format``.
Потом eslint ``yarn lint``. Если после eslint'a не будет ошибок, то можно коммитить. Не забудьте сделать ``git add .``. (Я вот все время забываю)
Для коммита пишем ``git cz``.

Дальше идем по пунктам:
1. Выбираем тип коммита, там в принципе все описано кто и что значит
2. Здесь обычно пишут, где были изменения. Но обычно изменения затрагивают несколько файлов, так что это пункт как по мне довольно бесполезен. Но может вы найдете его полезным и будете туда что-то писать.
3. Пишем название коммита, что сделали
4. Тут можно написать более подробное описание
5. Этот пункт для нас довольно бесполезен
6. Как собственно и этот
7. Посмотрите на результат, точно ли все закоммитилось

# Спасибо за внимание :)
