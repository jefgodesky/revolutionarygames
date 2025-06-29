import {
  experimental_AstroContainer as AstroContainer,
  type ContainerRenderOptions
} from 'astro/container'

type AstroComponentFactory = Parameters<AstroContainer["renderToString"]>[0]

const render = async (
  Component: AstroComponentFactory,
  options: ContainerRenderOptions = {}
): Promise<DocumentFragment> => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(Component, options)

  const tpl = document.createElement('template')
  tpl.innerHTML = result
  return tpl.content
}

export default render
